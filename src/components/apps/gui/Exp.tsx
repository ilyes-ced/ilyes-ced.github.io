import { langTexts, store } from "../../../store";

export default function () {
  return (
    <div class="pl-4 flex">
      <div class="pt-1">
        <div class="size-4 rounded-full bg-blue"></div>
      </div>
      <div class="flex flex-col justify-between pl-4">
        <h3 class="font-semibold mb-1">{langTexts().intern0}</h3>
        <span class="font-light text-sm">{langTexts().intern1}</span>
        <p class="my-2 text-justify"></p>
        <ul class="list-disc pl-4">
          <li>{langTexts().intern2}</li>
          <li>{langTexts().intern3}</li>
          <li>{langTexts().intern4}</li>
        </ul>
      </div>
    </div>
  );
}
