import { Fragment } from "react";
import Card from "../components/Card";
import Input from "../components/Input";

export default function Setup() {
  return (
    <Fragment>
      <main className="max-w-xl mx-auto space-y-4">
        <Card id="identity" title="Identity">
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-base font-medium">
                Name *
              </label>
              <Input placeholder="MVP starter" id="name" />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-base font-medium">Logo *</span>
              <Input placeholder="Link" />
            </div>
          </form>
        </Card>

        <Card id="content" title="Content">
          <form>
            <div>
              <label htmlFor="tagline">Tagline *</label>
              <Input
                placeholder="Craft your MVP in under 5 minutes!"
                id="tagline"
              />
            </div>
            <div>
              <label htmlFor="copy">Content *</label>
              <textarea id="copy" rows={10} />
            </div>
            <div>
              <p>Media *</p>
              <p>Type</p>
              <button>Image</button>
              <button>Video</button>
              <Input placeholder="Link" />
            </div>
          </form>
        </Card>

        <Card id="social" title="Social">
          <form>
            <div>
              <label htmlFor="facebook">Facebook</label>
              <Input placeholder="https://facebook.com/your.production.name" />
            </div>
            <div>
              <label htmlFor="instagram">Instagram</label>
              <Input placeholder="https://instagram.com/your.product.name" />
            </div>
            <div>
              <label htmlFor="twitter">Twitter</label>
              <Input placeholder="https://twitter.com/your_product_name" />
            </div>
          </form>
        </Card>
      </main>
    </Fragment>
  );
}
