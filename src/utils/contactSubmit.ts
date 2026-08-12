type ContactPayload = Record<string, FormDataEntryValue | string | null | undefined>;

async function submitContact(payload: ContactPayload) {
  const body = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, typeof value === "string" ? value : String(value ?? "")]),
  );

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let message = "Unable to send your message. Please try again later.";
    try {
      const data = await response.json();
      if (typeof data.error === "string") message = data.error;
    } catch {
      // Keep the generic message when the server returns a non-JSON error.
    }
    throw new Error(message);
  }
}

export { submitContact };
