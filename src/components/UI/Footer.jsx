import gitHubLogo from "../../assets/GithubLogo.png"
import linkedInLogo from "../../assets/linkedinLogo.png"
import instagramLogo from "../../assets/instagramLogo.png"

export default function Footer() {
    return (

<div className="navbar navbar-expand-lg bg-secondary">
    <a href="https://github.com/steakbutter"><img src={gitHubLogo} alt="github logo" /> </a>
    <a href=""><img src={linkedInLogo} alt="linkedin logo" /></a>   
    <a href=""><img src={instagramLogo} alt="instagram logo" /></a> 
</div>
    )
}