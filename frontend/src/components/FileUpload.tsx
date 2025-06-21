import axios from 'axios';

export default function FileUpload() {
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    await axios.post('http://localhost:3001/upload', formData);
    alert('File uploaded');
  };

  return <input type="file" accept=".docx" onChange={handleUpload} />;
}