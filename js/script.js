document.getElementById('captureButton').addEventListener('click', () => {
    html2canvas(document.getElementById('contentToCapture')).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new window.jspdf.jsPDF()
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save('captured_invoice.pdf');
    });
});


