export default function () {
  return <Grid />;
}
// make them clickabee to send to the url of the projects in github

const Grid = () => {
  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
const Card = () => {
  return (
    <div class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px]">
      <div class="text-3xl font-bold">title</div>
      <div class="text-sm font-light">subtitle</div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-red rounded">lorem</div>
        <div class="px-2 py-1 bg-green rounded">lorem</div>
        <div class="px-2 py-1 bg-orange rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-blue rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-yellow rounded">lorem</div>
        <div class="px-2 py-1 bg-purple rounded">lorem</div>
      </div>

      <div class="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos est
        consequuntur sunt eius similique consectetur itaque ipsa nam velit,
        voluptatem provident. Consectetur earum placeat perferendis tempore
        voluptate minima error illo!
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-red rounded">lorem</div>
        <div class="px-2 py-1 bg-green rounded">lorem</div>
        <div class="px-2 py-1 bg-orange rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-blue rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-yellow rounded">lorem</div>
        <div class="px-2 py-1 bg-purple rounded">lorem</div>
      </div>
    </div>
  );
};
