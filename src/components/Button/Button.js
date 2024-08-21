
//VARIANT  - PRIMARY | SECONDARY

export default function Button ({ variant, children }) {

    return (
        <button className={`outline-none px-4 py-3 bg-${variant} text-white`}>{children}</button>
    )
}