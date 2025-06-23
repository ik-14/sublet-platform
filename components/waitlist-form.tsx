"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { sendWaitlistConfirmation } from "@/lib/emailjs"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Check if email already exists
      const { data: existingUser, error: checkError } = await supabase
        .from("waitlist")
        .select("email")
        .eq("email", email)
        .single()

      if (checkError && checkError.code !== "PGRST116") {
        // PGRST116 is "not found" error, which is expected for new users
        throw checkError
      }

      if (existingUser) {
        alert("You're already on our waitlist! We'll notify you when we launch.")
        setLoading(false)
        return
      }

      // Insert new user
      const { error: insertError } = await supabase.from("waitlist").insert([
        {
          email: email,
          user_type: userType || "not_specified",
        },
      ])

      if (insertError) throw insertError

      // Send confirmation email using EmailJS
      console.log("sendign an email...")
      const emailResult = await sendWaitlistConfirmation(email, userType)

      if (!emailResult.success) {
        console.error("Failed to send confirmation email:", emailResult.error)
        // Still show success to user since they were added to waitlist
      }

      setLoading(false)
      setSubmitted(true)
    } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center space-y-4 p-6 bg-green-50 rounded-xl border border-green-200">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
        <h3 className="text-lg font-semibold text-green-800">You're on the list!</h3>
        <p className="text-green-700">
          Thanks for joining our waitlist. We've sent a confirmation email to <strong>{email}</strong>.
        </p>
        <p className="text-sm text-green-600">Check your inbox (and spam folder) for next steps!</p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false)
            setEmail("")
            setUserType("")
          }}
          className="mt-4"
        >
          Add Another Email
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button onClick={handleSubmit} disabled={loading || !email} className="bg-primary hover:bg-primary/90 px-6">
          {loading ? "..." : "Join"}
        </Button>
      </div>
      <div className="space-y-3">
        <Select value={userType} onValueChange={setUserType} required>
          <SelectTrigger>
            <SelectValue placeholder="I am a..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="guest">Student looking for housing</SelectItem>
            <SelectItem value="student host">Student looking to sublet my place</SelectItem>
            <SelectItem value="university">University representative</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" required />
          <Label htmlFor="terms" className="text-xs text-gray-600">
            I agree to the terms and conditions and privacy policy
          </Label>
        </div>
      </div>
    </div>
  )
}
