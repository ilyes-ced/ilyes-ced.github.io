export default function () {
  return (
    <div class="space-y-6">
      <h1 class="text-xl font-extrabold">Contact Me</h1>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div>
            Have a project idea, a question, or just want to say hello?
            <br />
            I'm always open to chatting about software, tech, or potential
            collaborations.
            <br />
            Drop me a message — I'll get back to you as soon as I can.
          </div>
        </div>
        <div class="flex flex-col">
          <div>
            Github:{" "}
            <a
              href="https://github.com/ilyes-ced/"
              class="text-orange underline"
            >
              ilyes-ced
            </a>
          </div>
          <div>
            LinkedIn:{" "}
            <a
              href="https://github.com/ilyes-ced/"
              class="text-orange underline"
            >
              testing a longer url to see the respons
            </a>
          </div>
          <div>
            Email:{" "}
            <a
              href="https://github.com/ilyes-ced/"
              class="text-orange underline"
            >
              testing a longer url to see the respons
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <p>Subject</p>
          <input
            type="text"
            name="subject"
            class="border w-full p-2"
            placeholder="Enter your Subject"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <p>Email</p>
          <input
            type="text"
            name="email"
            class="border w-full p-2"
            placeholder="Enter your Email"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <p>Message</p>
          <textarea
            name="email"
            class="border w-full p-2 h-36"
            placeholder="Enter your Message"
          />
        </div>
      </div>
      <div class="w-full flex justify-end">
        <button class="btn border-2 px-4 py-2 bg-background/10 hover:bg-background/75 transition-colors duration-200 ease-in-out cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
}
