import emailjs from "@emailjs/browser"

export async function sendWaitlistConfirmation(email: string, userType: string) {
  try {
    // Initialize EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

    const templateParams = {
      email: email,
      user_type: userType,
      user_name: email.split("@")[0],
      company_name: "DormShare",
      message: `Welcome to DormShare! You've successfully joined our waitlist as a ${userType}. We're working hard to launch our platform and you'll be among the first to know when we go live!`,
    }

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
    )

    return { success: true, data: response }
  } catch (error) {
    console.error("EmailJS error:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
