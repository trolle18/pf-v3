

export default function SectionCntr({children, data}) {
  return (
    <>
      <section className="section-cntr section" id={data.tag}> 
          {children}
      </section>
    </>
  )
};
