"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does DormShare work?</AccordionTrigger>
        <AccordionContent>
          DormShare connects universities and students who have empty dorm rooms with students and interns looking for
          affordable short-term housing. Universities and students can list their available spaces, and those looking
          for housing can search and book directly through our platform.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is this legal? Can universities actually sublet dorms?</AccordionTrigger>
        <AccordionContent>
          Yes, many universities already have programs for summer housing or conference accommodations. DormShare works
          with universities to ensure all listings comply with their policies and local regulations. For
          student-to-student subletting, we verify that the landlord allows this practice before listing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How much can I save compared to traditional housing options?</AccordionTrigger>
        <AccordionContent>
          On average, users save 30-50% compared to hotels or short-term apartment rentals in the same area. Prices vary
          by location, but university dorms are typically much more affordable than market-rate housing, especially in
          expensive cities.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What amenities are typically included?</AccordionTrigger>
        <AccordionContent>
          Most listings include basic furnishings (bed, desk, chair, storage), utilities, and WiFi. Many campus
          accommodations also offer access to facilities like gyms, libraries, and dining halls, though these vary by
          location and time of year. Each listing clearly specifies what's included.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>When will DormShare launch?</AccordionTrigger>
        <AccordionContent>
          We're currently in the development phase and plan to launch in select cities for the upcoming summer season.
          Join our waitlist to be notified when we launch in your area and to get early access to listings.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
