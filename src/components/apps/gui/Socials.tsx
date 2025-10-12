import { store } from "../../../store";

export default function () {
  return (
    <div class="space-y-6">
      <h1 class="text-xl font-extrabold">{store.langTexts.contactMe}</h1>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div>
            {store.langTexts.contact0}
            <br />
            {store.langTexts.contact1}
            <br />
            {store.langTexts.contact2}
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
          <p>{store.langTexts.Subject}</p>
          <input
            type="text"
            name="subject"
            class="border w-full p-2 focus:outline-0"
            placeholder="Enter your Subject"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <p>{store.langTexts.Email}</p>
          <input
            type="text"
            name="email"
            class="border w-full p-2 focus:outline-0"
            placeholder="Enter your Email"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <p>{store.langTexts.Message}</p>
          <textarea
            name="email"
            class="border w-full p-2 h-36 focus:outline-0"
            placeholder="Enter your Message"
          />
        </div>
      </div>
      <div class="w-full flex justify-end">
        <button class="btn border-2 px-4 py-2 bg-background/10 hover:bg-background/75 transition-colors duration-200 ease-in-out cursor-pointer">
          {store.langTexts.Send}
        </button>
      </div>
    </div>
  );
}
