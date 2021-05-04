import React from 'react';
const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Robert Garcia</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15000.00</td>
                    </tr>
                    <tr>
                        <td>23/04/2021</td>
                        <td>Joe Higashi</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15001.00</td>
                    </tr>
                    <tr>
                        <td>24/04/2021</td>
                        <td>Ryo Sakasaki</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15033.00</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default DataTable;