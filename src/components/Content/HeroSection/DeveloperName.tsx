interface Props {
  name: string;
}

export default function DeveloperName({ name }: Props) {
  return (
    <h3 className='text-center text-[40px] md:text-7xl xl:text-[88px] md:text-left md:mb-[26px] font-bold leading-[40px] tracking-[-1.14px] xl:tracking-[-2.5px] md:px-0 px-4'>
      Nice to
      <br className='hidden md:block xl:hidden' /> meet you! I'm
      <span className='inline md:hidden xl:inline'>&nbsp;</span>
      <br className='hidden md:block xl:hidden' />
      <u className='decoration-primary-green'>{name}.</u>
    </h3>
  );
}
