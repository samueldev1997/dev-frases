import { useState } from 'react'
import Logo from './assets/logo.png'
import './App.css'

function App() {

    const [frase, setFrase] = useState('')
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

    const allFrases = [
        {
            id: 1,
            categoria: 'Motivação',
            frases: [
                'Acredite em si mesmo para dar o próximo passo.',
                'Seja a mudança que você deseja ver no mundo.',
                'Pequenos progressos são ainda progressos.',
                'Os desafios são apenas oportunidades disfarçadas.',
                'Cultive a gratidão e o universo conspirará a seu favor.',
                'Acredite, o melhor ainda está por vir.',
                'Transforme os obstáculos em degraus para suas vitórias.',
                'Faça hoje algo que seu futuro eu agradecerá.',
                'Cada esforço conta, continue se movendo.'
            ]
        },
        {
            id: 2,
            categoria: 'Bom dia',
            frases: [
                'Bom dia! Hoje é um novo dia cheio de possibilidades.',
                'Um novo dia, uma nova bênção. Não deixe passar sem aproveitá-lo.',
                'Bom dia! Vá em frente e espalhe alegria por onde passar.',
                'Cada manhã traz uma nova página em sua história. Faça-a bela!',
                'Que seu café seja forte e seu dia leve. Bom dia!',
                'Que sua jornada hoje seja leve e repleta de paz. Bom dia!',
                'Abra os olhos, há um dia espetacular esperando para ser vivido. Bom dia!',
                'A vida sorri para aqueles que têm coragem de sorrir de volta. Bom dia!'
            ]
        }
    ]

    const fraseStyle = {
        color: allFrases[categoriaSelecionada].categoria === 'Motivação' ? '#409238' : '#51a5b4'
    }

    function handleSwitchCategory(index: number){
        setCategoriaSelecionada(index)
    }

    function gerarFrase(){
        let numeroAleatorio = Math.floor( Math.random() * allFrases[categoriaSelecionada].frases.length)
        allFrases[categoriaSelecionada].frases[numeroAleatorio]

        setFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
    }

    return (
        <div className='container' >
            <img 
                src={Logo}
                alt="Logo frases"
                className='logo' 
            />

            <h2 className='title'> Categorias </h2>

            <section className='category-area' >
                {allFrases.map((item, index) => (
                    <button 
                        className='category-button' 
                        key={item.id}
                        style={{
                            borderWidth:  item.categoria === allFrases[categoriaSelecionada].categoria ? 2 : 0,
                            borderColor: '#1fa4db'
                        }}

                        onClick={() => handleSwitchCategory(index)}
                    >
                        {item.categoria}
                    </button>
                ))}
            </section>

            <button  className='button-frase' onClick={gerarFrase}> Gerar frase </button>
              
            {frase !== '' && (
                <p 
                    className='texto-frase' 
                    style={fraseStyle}
                >
                        {frase}
                </p>
            )}

        </div>
    )
}

export default App
