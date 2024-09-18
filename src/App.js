import logo from './logo.svg';
import './App.css';
import DynamicForm from './components/DynamicForm.js';
import formSchema from './components/FormSchema.json';

function App() {
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mt-5">
        <DynamicForm schema={formSchema} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
