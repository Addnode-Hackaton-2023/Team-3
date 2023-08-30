using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Backend.Models;

public partial class DrivingStop
{
    public Guid DrivingId { get; set; }

    public Guid StopId { get; set; }

    public int? Weight { get; set; }

    public int? Duration { get; set; }

    public string? Comment { get; set; }

    public DateTime? Eta { get; set; }

    [JsonIgnore]
    public virtual Driving Driving { get; set; } = null!;

    [JsonIgnore]
    public virtual Stop Stop { get; set; } = null!;
}
