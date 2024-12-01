import GetStartedButton from './components/GetStartedButton'

export default function Home() {
  return (
    <div className='w-full h-dvh flex justify-center items-center'>
      <div className='max-w-xl flex flex-col space-y-8'>
        <h1 className='text-5xl font-semibold font-[family-name:var(--font-geist-sans)] text-[--foreground] leading-[145%]'>
          NextJS Authentication With Google.
        </h1>

        <GetStartedButton />
      </div>
    </div>
  )
}
