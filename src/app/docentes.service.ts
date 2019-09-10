import {Injectable} from '@angular/core';

@Injectable()
export class DocentesService{
    getDocentes(): string[]{
        return[
            //ingeneria de sistemas
            'Blanco Garrido Fabian',
            'Torres Ceron Wilfred',
            'Alonso Moncada Mauricio Antonio',
            'Samaca Chavarriaga Luis Abdul',
            'Velasquez Carranza Juan Fernando',
            'Simanca Herrera Fredys Alberto',
            'Ojeda Perez Jorge Eliecer',
            'Novoa Torres Norberto',
            'Forero Saboya Pedro Alonso',
            'Carreño Hernandez Pablo Enrrique',
            'Gaitan Gomez Henry',
            'Acosta Rodriguez Rafael Antonio',
            'Reyes Roncancio Fredy',
            'Mellizo Angulo Oscar Guillermo'


        ];
    }
}

