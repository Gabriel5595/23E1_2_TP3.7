import "./App.css"

export default function Carro({nome_carro}) {
    return (
        <div className="card">
            Carro: {nome_carro}
        </div>
    );
}