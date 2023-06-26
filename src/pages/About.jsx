import React from 'react'
import '../styles/about.css'
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from '/pdf/Resume.pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function About() {

  const downloadPDF = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch(ResumePDF);
      const pdfBlob = await response.blob();

      // Create a URL for the blob object
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Create a temporary <a> element and set its attributes
      const downloadLink = document.createElement('a');
      downloadLink.href = pdfUrl;
      downloadLink.download = 'resume.pdf';

      // Append the <a> element to the document body
      document.body.appendChild(downloadLink);

      // Simulate a click event to trigger the download
      downloadLink.click();

      // Clean up: remove the <a> element and revoke the URL object
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    };
  }
  return (
    <>
    <div className='about-body'>
    <div className='about-container'>
      <div className='resume'>
        <div className='resume-header'>
          <p>resume</p>
        </div>
        
        <div className='resume-pdf'>
        <Document file='/pdf/Resume.pdf'>
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>

        <button className="btn btn-primary" onClick={downloadPDF}>Download PDF</button>
        </div>

      </div>

      <div className='neon-line'></div>
      
    <div>About</div>
    <p>ya</p>
    </div>

    </div>
    </>
  )
}
