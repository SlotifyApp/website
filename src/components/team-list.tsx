import { Button } from "@/components/ui/button";

export interface Team {
  id: number;
  name: string;
}

interface TeamListProps {
  teams: Team[];
  onSelectTeam: (team: Team) => void;
}

export function TeamList({ teams, onSelectTeam }: TeamListProps) {
  return (
    <ul className="space-y-2">
      {teams.map((team) => (
        <li key={team.id}>
          <Button
            variant="outline"
            className="w-full justify-start text-left"
            onClick={() => onSelectTeam(team)}
          >
            {team.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
