import Link from "next/link";
import { IconType } from "react-icons";

type PlaylistItem = {
  name: string;
  route: string;
};

type Props = {
  data: PlaylistItem[];
};

export default function PlaylistItem(props: Props) {
  return (
    <>
      {props.data.map((playlist: PlaylistItem, i: number) => {
        return (
          <li className="px-5">
            <div>
              <Link
                href={playlist.route}
                className="flex flex-row items-center"
              >
                {playlist.name}
              </Link>
            </div>
          </li>
        );
      })}
    </>
  );
}
