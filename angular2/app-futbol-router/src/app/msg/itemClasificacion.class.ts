export interface ItemClasificacion {
        position: string;
        teamName: string;
        teamCode: string;
        crestURI: string;
        playedGames: number;
        points: number;
        goals: number;
        goalsAgainst: number;
        goalDifference:number;
        wins: number;
        draws:number;
        losses: number;
        home: {
            goals: number,
            goalsAgainst: number,
            wins: number,
            draws: number,
            losses: number,
        };
        away: {
            goals: number,
            goalsAgainst: number,
            wins: number,
            draws: number,
            losses: number
        }
    }