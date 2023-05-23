import React, { Component } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './presources.css';

class presources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presourec: '',
      amount: '',
      classType: '',
      presourceData: [],
      isUpdate: false,
      updateId: null,
    };
  }

   componentDidMount() {
    this.fetchpresourceData();
  }

  fetchpresourceData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/pResource/getResource');
      const presourecData = response.data;
      this.setState({ presourecData });
    } catch (error) {
      console.error('Error fetching presourec Data:', error);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const {presourec, amount, classType , isUpdate, updateId} = this.state;

    const formData = {
      presourec,
        amount,
        classType,
    };

    try {
      if (isUpdate) {
        await axios.put(
          `http://localhost:8080/pResource/updateResource/${updateId}`,
          formData
        );
        console.log('Form updated:', formData);

        this.setState({
          presourec: '',
          amount: '',
          classType: '',
          isUpdate: false,
          updateId: null,
         
        });

        toast.success('Data updated successfully.', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        await axios.post('http://localhost:8080/pResource/addResource', formData);
        console.log('Form submitted:', formData);

        this.setState({
          presourec: '',
          amount: '',
          classType: '',
        });

        toast.success('Data sent to the database.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      this.fetchPharmacyData();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  handleUpdate = (id) => {
    const presources = this.state.presourceData.find((data) => data._id === id);

    this.setState({
      presourec : presources.presourec,
      amount : presources.amount,
      classType: presources.classType,
      isUpdate: true,
      updateId: id,
    });
  };

  handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/pResource/deleteResource/${id}`);
      console.log('Data deleted:', id);

      toast.success('Data deleted successfully.', {
        position: toast.POSITION.TOP_CENTER,
      });

      this.fetchpresourceData();
    } catch (error) {
      console.error('Error deleting data:', error);
      toast.error('Error deleting data.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  render() {
    const {presourec, amount, classType , presourceData , isUpdate } = this.state;
    const buttonText = isUpdate ? 'Update Now' : 'Make a Request';

    return (
      <div className="container">
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="presourec">Phy_Resource type:</label>
              <input
                type="text"
                id="presourec"
                name="presourec"
                value={presourec}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={amount}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="classType">ClassType:</label>
              <input
                type="text"
                id="classType"
                name="classType"
                value={classType}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">{buttonText}</button>
          </form>
        </div>
    
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>phy_Resource</th>
                <th>Amount</th>
                <th>classType</th>
                <th>updateResource</th>
              </tr>
            </thead>
            <tbody>
              {presourceData.map((data) => (
                <tr key={data._id}>
                  <td>{data.presourec}</td>
                  <td>{data.amount}</td>
                  <td>{data.classType}</td>
                  <td>
                    <button
                      className="update-button"
                      onClick={() => this.handleUpdate(data._id)}
                    >
                      Update
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => this.handleDelete(data._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    );
    }
    }
 
export default presources;