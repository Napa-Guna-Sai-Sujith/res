function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const portfolio = document.getElementById("portfolio").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const projects = document.getElementById("projects").value;
    const education = document.getElementById("education").value;

    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <p><strong>Portfolio:</strong> ${portfolio}</p><br>

        <h3>Professional Summary</h3>
        <p>${summary}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Projects</h3>
        <p>${projects}</p>

        <h3>Education</h3>
        <p>${education}</p>
    `;

    document.getElementById("resumeOutput").innerHTML = resumeHTML;
}

function downloadPDF() {
    const element = document.getElementById("resumeOutput");
    html2pdf().from(element).save("My_Resume.pdf");
}
