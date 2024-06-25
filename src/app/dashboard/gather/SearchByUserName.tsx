"use client";
import { Input } from "@/components/ui/input";
import HitScreen from "./HitScreen";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { alt_background_tw_css } from "@/components/styleConstants";

type SearchByUsernameProps = React.HTMLProps<HTMLDivElement> & {};
const SearchByUsername: React.FC<SearchByUsernameProps> = ({}) => {
  const [username, setUsername] = useState<string>("");
  const [searchBarText, setSearchBarText] = useState<string>("");
  const [searching, setSearching] = useState<boolean>(false);

  const onClick = (newUsername: string) => {
    toast({
      title: `Searching for user ${newUsername} ...`,
      description: (
        <>
          <p>This will take time, calling API with</p>
          <pre
            className={cn(
              "mt-2 w-[340px] rounded-md p-2",
              alt_background_tw_css
            )}
          >
            <code>{JSON.stringify(newUsername, null)}</code>
          </pre>
        </>
      ),
    });
    setUsername(newUsername);
  };

  return (
    <div className="pt-16 space-y-2">
      <div className="text-2xl">Search by online username</div>
      <div className="flex flex-row w-full max-w-sm space-x-2">
        <Input
          className="rounded-tr-none rounded-br-none"
          type="search"
          placeholder="Username"
          onChange={(e) => {
            setSearchBarText(e.target.value);
          }}
        />
        <Button
          type="button"
          onClick={() => onClick(searchBarText)}
          className="rounded-tl-none rounded-bl-none"
        >
          Search
        </Button>
      </div>
      {searching && (
        <div className="text-lg flex flex-row italic space-x-2">
          <div>{"Searching for user "}</div>
          <div className="font-bold font-mono">{`"${username}"`}</div> ...
        </div>
      )}

      {username !== "" && (
        <HitScreen
          className="pt-4"
          username={username}
          streamId={username}
          setUsername={setUsername}
          setSearching={setSearching}
        />
      )}
    </div>
  );
};

export default SearchByUsername;
