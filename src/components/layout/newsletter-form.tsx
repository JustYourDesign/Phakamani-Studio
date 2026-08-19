"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend is wired up yet — connect this to an email list provider
    // (e.g. Mailchimp, Resend Audiences) before going live.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-small text-mint">
        <Check className="size-4" />
        You&rsquo;re on the list.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <Input
        type="email"
        required
        placeholder="Enter your email"
        aria-label="Email address"
        className="border-white/20 bg-white/5 text-white placeholder:text-white/40"
      />
      <Button type="submit" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
