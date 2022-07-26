import '../scss/Test.scss';

export default function Cards() {


    const cards = document.querySelectorAll(".card")

    const observer = new IntersectionObserver( 
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                if (entry.isIntersecting) observer.unobserve(entry.target)
            }
            )
        }, 
        {
            // rootMargin: "100px",
            threshold: 1,
        }        
    )

    // const lastCardObserver = new IntersectionObserver(entries => {
    //     const lastCard = entries[0]
    //     if (!lastCard.isIntersecting) return
    //     loadNewCards()
    //     lastCardObserver.unobserve(lastCard.target)
    //     lastCardObserver.observe(document.querySelector(".card:lasr-child"))
    // }, {})

    // lastCardObserver.observe(document.querySelector(".card:last-child"))


    cards.forEach(card => {
        observer.observe(card)
    })


    // const cardContainer = document.querySelector(".card-container")

    // function loadNewCards() {
    //     for (let i = 0; i < 10; i++) {
    //         const card = document.createElement("div")
    //         card.textContent = "New Card"
    //         card.classList.add("card")
    //         observer.observe(card)
    //         cardContainer.append(card)
    //     }
    // }



    return (
        <>
            <section className="test-cntr card-container">
                <div className="card">Card 1 </div>
                <div className="card">Card 2 </div>
                <div className="card">Card 3 </div>
                <div className="card">Card 4 </div>
                <div className="card">Card 5 </div>
                <div className="card">Card 6 </div>
                <div className="card">Card 7 </div>
                <div className="card">Card 8 </div>
                <div className="card">Card 9 </div>
            </section>
        
        </>
    )
};