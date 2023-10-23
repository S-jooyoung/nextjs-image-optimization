type FooterProps = {
  author: string;
  githubUrl: string;
};

export default function Footer({ author, githubUrl }: FooterProps) {
  return (
    <footer className='mt-auto flex h-16 w-full items-center justify-center'>
      <p className='text-base'>
        © {new Date().getFullYear()}
        &nbsp; &nbsp;powered by &nbsp;
        <a
          className='highlight-color hover:highlight-hover-color'
          href={githubUrl}
        >
          {author}
        </a>
      </p>
    </footer>
  );
}
