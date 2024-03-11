import ScrollToTopButton from "@/components/ScrollToTop"

export default function Layout({children}){
    return(
        <> 
        <main>{children}</main>
        <ScrollToTopButton />
        </>
    )
}