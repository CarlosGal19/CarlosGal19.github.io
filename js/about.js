import { certifications } from "../data/certifications.js";

const currentStackRoute = 'https://skillicons.dev/icons?i=ts,npm,tailwind,dotnet,next,postgres&perline='
const stackRoute = "https://skillicons.dev/icons?i=react,js,ts,nodejs,npm,express,py,fastapi,mysql,mongodb,php,java,cs,tailwind,cpp,dotnet,next,prisma,postgres,linux&perline=";

document.addEventListener('DOMContentLoaded', () => {
    resizeIcons();
    addCertifications();
});

window.onresize = () => {
    resizeIcons();
}

function addCertifications() {

    const certificationsContainer = document.querySelector('.certifications');

    certifications.forEach(cert => {
        const imgCertificate = document.createElement('img');
        imgCertificate.classList.add('certificationImg');
        imgCertificate.src = cert.href;
        imgCertificate.alt = cert.alt;

        const certificationInfo = document.createElement('div');
        certificationInfo.classList.add('certificationInfo');

        const certificationTitle = document.createElement('p');
        certificationTitle.classList.add('certificationTitle');
        certificationTitle.textContent = cert.name;

        const certificationProvider = document.createElement('p');
        certificationProvider.classList.add('certificationProvider');
        certificationProvider.textContent = cert.provider;

        certificationInfo.appendChild(certificationTitle);
        certificationInfo.appendChild(certificationProvider);

        const certification = document.createElement('div');
        certification.classList.add('certification');

        certification.appendChild(imgCertificate);
        certification.appendChild(certificationInfo);

        certificationsContainer.appendChild(certification);
    });

}

function resizeIcons() {
    const imgCurrentStack = document.querySelector('#currentStack');
    const imgStack = document.querySelector('#stack');
    const iconsPerLineCurrentStack = window.innerWidth < 840 ? 4 : window.innerWidth < 1024 ? 5 : 6;
    const iconsPerLineStack = window.innerWidth < 1024 ? 8 : 10;
    imgCurrentStack.src = `${currentStackRoute}${iconsPerLineCurrentStack}`;
    imgStack.src = `${stackRoute}${iconsPerLineStack}`;
}
