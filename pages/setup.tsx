import { useForm, Controller } from "react-hook-form";
import Card from "../components/Card";
import Input from "../components/Input";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type FormData = {
  name: string;
  logo?: string;
  tagline: string;
  description: string;
  media?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Required<FormData> = await import("../public/data.json").then(
    datum => datum.default
  );
  return {
    props: {
      data
    }
  };
};

export default function Setup(props) {
  const { control, errors, register, handleSubmit } = useForm<FormData>();
  const data = props.data as Required<FormData>;

  function onSubmit(submittedData: FormData) {
    console.log({ data: submittedData });
  }

  return (
    <>
      <main className="max-w-lg p-4 mx-auto my-8 space-y-4">
        <Card title="Setup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <section id="identity">
              <h2 className="mt-12 mb-4 text-lg font-medium">Identity</h2>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name">Name *</label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ onChange }) => (
                      <Input
                        placeholder="MVP starter"
                        id="name"
                        onBlur={({ target: { value } }) => onChange(value)}
                        errors={errors.name}
                        defaultValue={data.name}
                      />
                    )}
                    rules={{ required: true }}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="logo">Logo</label>
                  <Controller
                    name="logo"
                    control={control}
                    render={({ onChange }) => (
                      <Input
                        id="logo"
                        placeholder="Link"
                        onBlur={({ target: { value } }) => onChange(value)}
                        defaultValue={data.logo}
                      />
                    )}
                  />
                </div>
              </div>
            </section>

            <section id="content">
              <h2 className="mt-12 mb-4 text-lg font-medium">Content</h2>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="tagline">Tagline *</label>
                  <Controller
                    name="tagline"
                    control={control}
                    render={({ onChange }) => (
                      <Input
                        placeholder="Craft your MVP in under 5 minutes!"
                        id="tagline"
                        onBlur={({ target: { value } }) => onChange(value)}
                        defaultValue={data.tagline}
                      />
                    )}
                    rules={{ required: true }}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="copy">Description *</label>
                  <textarea
                    name="copy"
                    id="copy"
                    rows={5}
                    className="p-2 border rounded-md"
                    maxLength={240}
                    ref={register({ required: true, maxLength: 240 })}
                    defaultValue={data.description}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <label htmlFor="media">Media (image only)</label>
                  <Controller
                    name="media"
                    control={control}
                    render={({ onChange }) => (
                      <Input
                        id="media"
                        name="media"
                        placeholder="Link"
                        onBlur={({ target: { value } }) => onChange(value)}
                        defaultValue={data.media}
                      />
                    )}
                  />
                </div>
              </div>
            </section>

            <section id="social">
              <h2 className="mt-12 mb-4 text-lg font-medium">Social</h2>

              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="facebook">Facebook username</label>
                  <Controller
                    name="facebook"
                    control={control}
                    render={({ onChange }) => (
                      <Input
                        placeholder="https://facebook.com/your.production.name"
                        id="facebook"
                        onBlur={({ target: { value } }) => onChange(value)}
                        defaultValue={data.facebook}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="instagram">Instagram username</label>
                  <Controller
                    name="instagram"
                    control={control}
                    render={({ onChange }) => (
                      <Input
                        placeholder="https://instagram.com/your.production.name"
                        id="instagram"
                        onBlur={({ target: { value } }) => onChange(value)}
                        defaultValue={data.instagram}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="twitter">Twitter handle</label>
                  <Controller
                    name="twitter"
                    control={control}
                    render={({ onChange }) => (
                      <Input
                        placeholder="https://twitter.com/your_product_name"
                        id="twitter"
                        onBlur={({ target: { value } }) => onChange(value)}
                        defaultValue={data.twitter}
                      />
                    )}
                  />
                </div>
              </div>
            </section>
            <div className="flex justify-end my-4 space-x-3">
              <button className="text-white bg-blue-800">Preview</button>
              <button className="text-white bg-blue-500">Save</button>
            </div>
          </form>
        </Card>
      </main>
    </>
  );
}
