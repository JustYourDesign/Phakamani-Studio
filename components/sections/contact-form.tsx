"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const interests = [
  "Personal performance coaching",
  "Corporate / team programme",
  "School or youth programme",
  "Speaking or workshop",
  "Something else",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend is wired up yet — connect this to an email API route or
    // a form service (e.g. Resend, Formspree) before going live.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-card bg-mist p-12 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="text-subheading font-semibold text-obsidian">
          Message sent
        </h3>
        <p className="max-w-sm text-small text-fog">
          Thank you for reaching out. We&rsquo;ll be in touch shortly to
          continue the conversation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-card bg-mist p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            required
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="organisation">Organisation (optional)</Label>
          <Input id="organisation" name="organisation" placeholder="Company or school name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interest">I&rsquo;m interested in</Label>
          <Select name="interest">
            <SelectTrigger id="interest" className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {interests.map((interest) => (
                <SelectItem key={interest} value={interest}>
                  {interest}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us a bit about your goals..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
        Send Message
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
