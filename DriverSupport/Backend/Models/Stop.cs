using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using NetTopologySuite.Geometries;

namespace Backend.Models;

public partial class Stop
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public StopType Type { get; set; }

    public string Address { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public string Notes { get; set; } = null!;

    public byte Duration { get; set; }

    [JsonIgnore]
    public Geometry Position { get; set; } = null!;

    [NotMapped]
    public Esri.Point Point { get { return new Esri.Point() { X = ((Point)Position).X, Y = ((Point)Position).Y }; } }

    public byte[]? Image { get; set; }

    public string? MovieUrl { get; set; }

    [JsonIgnore]
    public virtual ICollection<DrivingStop> DrivingStops { get; set; } = new List<DrivingStop>();

    [JsonIgnore]
    public virtual ICollection<RouteStop> RouteStops { get; set; } = new List<RouteStop>();
}
