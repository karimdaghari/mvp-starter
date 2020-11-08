import { useForm, Controller } from "react-hook-form";
import Input from "./Input";

export type SetupData = {
  name: string;
  tagline: string;
  description: string;
  media?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

type Props = {
  data: SetupData;
};

export default function Setup({ data }: Props) {
  const { control, errors, register, handleSubmit } = useForm<SetupData>();

  function onSubmit(data: SetupData) {
    console.log({ data });
  }

  return (
    <div className="p-4">
      <div>
        <h1 className="mb-4 text-2xl font-medium">Setup</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <section id="identity">
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
                  // rules={{ required: true }}
                />
              </div>
            </div>
          </section>

          <section id="content">
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
                  // rules={{ required: true }}
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
            <button className="text-white bg-blue-500" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
