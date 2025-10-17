import img from "/image.png"
export default function Header() {
    return (
        <header>
            <img src={img} alt="" />
            <h2>Chef Claude</h2>
        </header>
    )
}