import FormContainer from "@/components/form/FormContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#d7e3fc] to-[#e2eafc] dark:from-[#070813] dark:to-[#111a31]">
      <div className="w-full max-w-4xl mx-auto">
        <FormContainer />
      </div>
    </main>
  );
}
