import { langTexts, store } from "../../../store";

export default function () {
  return (
    <div class="space-y-6">
      <h1 class="text-xl font-extrabold">{langTexts().contactMe}</h1>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div>
            {langTexts().contact0}
            <br />
            {langTexts().contact1}
            <br />
            {langTexts().contact2}
          </div>
        </div>
        <div class="flex flex-col">
          <div>
            Github:{" "}
            <a
              href="https://github.com/ilyes-ced/"
              class="text-orange underline"
              target="_blank"
            >
              ilyes-ced
            </a>
          </div>
          <div>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/ilyes-ced-1793a727b/"
              class="text-orange underline"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div>
            Email:{" "}
            <a
              href="ilyes.chiheb@proton.me"
              class="text-orange underline"
            >
              ilyes.chiheb@proton.me
            </a>
          </div>
        </div>
      </div>


      <p class="text-red text-3xl underline">*{langTexts().doesntWork}</p>

      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <p>{langTexts().Subject}</p>
          <input
            type="text"
            name="subject"
            class="border w-full p-2 focus:outline-0"
            placeholder={langTexts().contactSubjectPlaceholder}
          />
        </div>

        <div class="flex flex-col space-y-2">
          <p>{langTexts().Email}</p>
          <input
            type="text"
            name="email"
            class="border w-full p-2 focus:outline-0"
            placeholder={langTexts().contactTitlePlaceholder}
          />
        </div>

        <div class="flex flex-col space-y-2">
          <p>{langTexts().Message}</p>
          <textarea
            name="email"
            class="border w-full p-2 h-36 focus:outline-0"
            placeholder={langTexts().contactMessagePlaceholder}
          />
        </div>
      </div>
      <div class="w-full flex justify-end">
        <button class="btn border-2 px-4 py-2 bg-background/10 hover:bg-background/75 transition-colors duration-200 ease-in-out cursor-pointer">
          {langTexts().Send}
        </button>
      </div>
    </div>
  );
}
