import { Typography } from "../ui/typography";

const HomeQuote = () => {
  return (
    <section className="bg-gray-50" id="about">
      <div className="app-container py-24">
        <div className="flex flex-col items-center justify-center">
          <Typography variant="h2" className="font-semibold text-center">
            Why we&apos;re building this
          </Typography>

          <div className="font-normal max-w-3xl mt-8 text-center">
            <Typography variant="h4" className="font-normal text-gray-700 leading-relaxed mb-4">
              We&apos;ve all been there. That sinking feeling when you realize your bag is gone. Then comes the worst part: calling every place you visited, repeating the same description, hoping someone picked it up.
            </Typography>

            <Typography variant="h4" className="font-normal text-gray-700 leading-relaxed">
              We&apos;re building Renuir because that process is broken. One report should be enough. We want to make it easy to get your stuff back, and easy for good people to return what they find.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuote;
