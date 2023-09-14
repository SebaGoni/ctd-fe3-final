import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../utils/global.context';

const Detail = () => {
  const { dentistas, theme } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const selectedDentist = dentistas.find((dentist) => dentist.id === parseInt(id));
    setDentist(selectedDentist);
  }, [dentistas, id]);

  return (
    <div className={`dentist-detail ${theme}`}>
      {dentist && (
        <>
          <h1>Detail Dentist ID {dentist.id}</h1>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{dentist.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{dentist.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{dentist.phone}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Detail;

