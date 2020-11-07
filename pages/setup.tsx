import Card from "../components/Card";
import Input from "../components/Input";

export default function Setup() {
  return (
    <>
      <main className="max-w-lg p-4 mx-auto my-8 space-y-4">
        <Card title="Setup">
          <section id="identity">
            <h2 className="mt-12 mb-4 text-lg font-medium">Identity</h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name">Name *</label>
                <Input placeholder="MVP starter" id="name" name="name" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="logo">Logo</label>
                <Input id="logo" name="logo" placeholder="Link" />
              </div>
            </div>
          </section>

          <section id="content">
            <h2 className="mt-12 mb-4 text-lg font-medium">Copy</h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="tagline">Tagline *</label>
                <Input
                  placeholder="Craft your MVP in under 5 minutes!"
                  id="tagline"
                  name="tagline"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="copy">Content *</label>
                <textarea
                  name="copy"
                  id="copy"
                  rows={5}
                  className="p-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label htmlFor="media">Media (image only)</label>
                <Input id="media" name="media" placeholder="Link" />
              </div>
            </div>
          </section>

          <section id="social">
            <h2 className="mt-12 mb-4 text-lg font-medium">Social</h2>

            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="facebook">Facebook</label>
                <Input
                  placeholder="https://facebook.com/your.production.name"
                  id="facebook"
                  name="facebook"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="instagram">Instagram</label>
                <Input
                  placeholder="https://instagram.com/your.product.name"
                  id="instagram"
                  name="instagram"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="twitter">Twitter</label>
                <Input
                  placeholder="https://twitter.com/your_product_name"
                  id="twitter"
                  name="twitter"
                />
              </div>
            </div>
          </section>
          <div className="flex justify-end space-x-3">
            <button>Preview</button>
            <button>Save</button>
          </div>
        </Card>
      </main>
    </>
  );
}
