import { pluginManager } from "@/common/pluginManager";
import { useEffect, useState } from "react";


export default function useAlbumMusicList(albumItem: IAlbum.IAlbumItem | null) {
    const [musicList, setMusicList] = useState<IMusic.IMusicItem[] | null>(null);
  
    useEffect(() => {
      if(albumItem === null) {
        return;
      }
      const plugin = pluginManager.getPlugin(albumItem.platform);
      plugin?.instance?.getAlbumInfo?.(albumItem)?.then(_ => setMusicList(_))?.catch();
    }, []);
    return musicList;
}