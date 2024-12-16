import 'ldrs/lineSpinner'




export default function Loader() {
    return (
        <div style={{ minHeight: 'calc(100vh - 350px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <l-line-spinner
                size="40"
                stroke="3"
                speed="1"
                color="black"
            ></l-line-spinner>
        </div>
    )
}