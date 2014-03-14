def remote_file_exists(url)
  url = URI.parse(url)
  Net::HTTP.start(url.host, url.port) do |http|
  return http.head(url.request_uri).code == "200"
  end
end

def video(url, poster: false, type: false)
  if url =~ /((https?:\/\/|\/)(\S+))(\s+(\d+)\s(\d+))?(\s+(https?:\/\/|\/)(\S+))?/i
    @video = $1
  end

  @type = type.present? ? "{ 'techOrder': ['#{type}'] }" : ""
  @video_player = type == "flash" ? nil : "sublime"

  if @video
    if @video_player == "sublime"
      video =  "<script type='text/javascript' src='http://cdn.sublimevideo.net/js/gpbp4gog.js'></script>"
      video += "<video class='sublime' preload='none' controls poster='#{@poster}' data-setup='#{@type}' data-autoresize='fit'>"
    else
      # Default to videojs (opensource)
      video =  "<link href='//vjs.zencdn.net/4.4/video-js.css' rel='stylesheet'>"
      video += "<script src='//vjs.zencdn.net/4.4/video.js'></script>"
      video += "<video id='video' class='video-js vjs-default-skin' preload='none' controls poster='#{@poster}' data-setup='{#{"\"techOrder\": [\"flash\"]" if type == "flash" }}' width='auto' height='auto'>"
    end

    if remote_file_exists(@video + '.m3u8')
      video += "<source src='#{@video}.m3u8' type='application/x-mpegURL'/>"
    end

    if remote_file_exists(@video + '.m4v')
      video += "<source src='#{@video}.m4v' type='video/m4v'/>"
    end

    if remote_file_exists(@video + '.mp4')
      video += "<source src='#{@video}.mp4' type='video/mp4'/>"
    end

    if remote_file_exists(@video + '.mov')
      video += "<source src='#{@video}.mov' type='video/mp4'/>"
    end

    if remote_file_exists(@video + '.webm')
      video += "<source src='#{@video}.webm' type='video/webm'/>"
    end

    if remote_file_exists(@video + '.ogv')
      video += "<source src='#{@video}.ogv' type='video/ogg'/>"
    end

    video += "</video>"

  else
    "Error processing input, expected syntax: {% video url/to/video [width height] [url/to/poster] %}"
  end

end
