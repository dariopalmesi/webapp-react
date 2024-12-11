export default function Banner({ title, subtitle, leadtext }) {
    return (
        <div className="banner bg-success text-black py-4 mb-5">
            <div className="container-lg">
                <h1>{title}</h1>
                <h4 className="text-muted">{subtitle}</h4>
                <strong className="lead fs-3">{leadtext}</strong>
            </div>
        </div>
    )
}