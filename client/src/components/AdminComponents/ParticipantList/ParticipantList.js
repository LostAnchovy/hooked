import React from 'react';

// participantList component will receive the a list of participants to dynamically display
const participantList = (props) => {
    return (
        <React.Fragment>
            <h1>Event Participants</h1>
            <table className="table mt-4 text-center">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Here is where you would loop through the particpant list */}
                    <tr>
                        <th scope="row">1</th>
                        <td>Keith</td>
                        <td>123 Lollypop Lane</td>
                        <td>keith@keith.keith</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Dalina</td>
                        <td>456 CandyCane Cir</td>
                        <td>dalina@dalina.dalina</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Daniel</td>
                        <td>789 DonutHole Drive</td>
                        <td>daniel@daniel.daniel</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}
export default participantList;