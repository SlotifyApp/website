import { Button } from "@/components/ui/button";
import { Team } from "@/components/team-list";

interface JoinableTeamsProps {
  teams: Team[];
  onJoinTeam: (teamId: number) => void;
}

export function JoinableTeams({ teams, onJoinTeam }: JoinableTeamsProps) {
  return (
    <ul className="space-y-4">
      {teams.map((team) => (
        <li
          key={team.id}
          className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <span className="font-medium">{team.name}</span>
          </div>
          <Button onClick={() => onJoinTeam(team.id)}>Join Team</Button>
        </li>
      ))}
    </ul>
  );
}
