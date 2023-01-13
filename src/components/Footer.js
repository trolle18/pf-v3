import { useState, useEffect } from 'react';

export default function Footer({ globalData }) {
    const [year , setYear] = useState();

    const getYear = () =>  setYear(new Date().getFullYear())
    useEffect(() => { getYear() }, [])

    return (
      <>
        {globalData?.map((data) => (
          <footer className="footer-cntr" key={data?.id}>

            <div className="footer-top">
              <div className="footer-top__l-col">
                <div className="footer-logo">
                  {data?.links
                  ?.filter((link) => link?.type?.includes("logo"))
                  ?.map((link) => (
                    <a key={link?.id} href={link?.url} className='logo-link'>
                      {link?.text}
                    </a>
                  ))}
                </div>

                {data?.contact?.map((link) => (
                  <a key={link?.id} className='mailto' href={link?.url}>
                    {link?.text}
                  </a>
                ))}
              </div>

              <div className="footer-top__links">
                {data?.socialMedia?.map((link) => (
                  <a key={link?.id} href={link?.url} target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{__html: link?.svg}}></a>
                ))}
              </div>
            </div>

            {data?.copyRight?.map((copy) => (
              <div className="footer-btm" key={copy?.id}>
                <span dangerouslySetInnerHTML={{__html: copy?.text}}></span>
                <span className="copy"><span dangerouslySetInnerHTML={{__html: copy?.icon}}></span> {year}</span>
              </div>
            ))}

        </footer>
      ))}
    </>
  )
};
