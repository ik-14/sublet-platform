"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // Also show browser alert as backup
      alert("Success! You've been added to our waitlist. We'll notify you when we launch.")
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="text-center space-y-4 p-6 bg-green-50 rounded-lg border border-green-200">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
        <h3 className="text-lg font-semibold text-green-800">You're on the list!</h3>
        <p className="text-green-700">
          Thanks for joining our waitlist. We'll notify you at <strong>{email}</strong> when we launch.
        </p>
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="user-type">I am a...</Label>
        <Select value={userType} onValueChange={setUserType} required>
          <SelectTrigger id="user-type">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student looking for housing</SelectItem>
            <SelectItem value="university">University representative</SelectItem>
            <SelectItem value="property-manager">Property manager</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms" className="text-sm">
          I agree to the terms and conditions and privacy policy
        </Label>
      </div>
      <Button type="submit" className="w-full rounded-full" disabled={loading}>
        {loading ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  )
}
