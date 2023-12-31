
const Button = (props) => {
    return (
        <>
            <button className=" w-fit  bg-button text-white p-5 py-2 text-[1.15rem] font-[400] rounded-md hover:bg-[#3e4664] duration-[0.25s] dark:hover:shadow-[0px_0px_40px] dark:hover:shadow-shadowBG">
                {props.children}
            </button>
        </>
    )
}

export default Button
