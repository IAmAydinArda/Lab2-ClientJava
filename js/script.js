const output = document.getElementById('output');

function Applicant(location, role, experience, education, skills, certifications, languages, portfolio, relocate, remote, soft_skills, internship) {
    this.location = location;
    this.role = role;
    this.experience = experience;
    this.education = education;
    this.skills = skills; // array
    this.certifications = certifications; // array
    this.languages = languages; // array
    this.portfolio = portfolio;
    this.relocate = relocate; // boolean
    this.remote = remote; // boolean
    this.soft_skills = soft_skills; // array
    this.internship = internship; // boolean
}

let info = new Applicant(
    "Ottawa, ON",
    "Cybersecurity Analyst",
    2,
    "Bachelor's in Computer Science, Carleton University",
    ["Kali Linux", "Nmap", "SIEM", "Python"],
    ["CompTIA Security+", "CEH"],
    ["English", "Urdu"],
    "https://aishasecure.dev",
    true,
    true,
    ["Critical Thinking", "Discretion"],
    false
)

document.getElementById("location").textContent = `Location: ${info.location}`;
document.getElementById("role").textContent = `Target role: ${info.targetRole}`;
document.getElementById("experience").textContent = `Years of Experience: ${info.experience}`;
document.getElementById("education").textContent = `Education: ${info.education}`;
document.getElementById("skills").textContent = `Skills: ${info.skills.join(", ")}`;
document.getElementById("certifications").textContent = `Certifications: ${info.certifications.join(", ")}`;
document.getElementById("languages").textContent = `Languages Spoken: ${info.languages.join(", ")}`;
document.getElementById("portfolio").innerHTML = `Portfolio URL: <a href="${info.portfolio}" target="_blank">${aisha.portfolioURL}</a>`;
document.getElementById("relocate").textContent = `Willing to Relocate ${info.willingToRelocate}`;
document.getElementById("remote").textContent = `Remote Work Preferred: ${info.remote}`;
document.getElementById("soft_skills").textContent = `Soft Skills: ${info.soft_skills.join(", ")}`;
document.getElementById("internship").textContent = `Open to Internships: ${info.internship}`;
