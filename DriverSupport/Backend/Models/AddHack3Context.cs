using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

public partial class AddHack3Context : DbContext
{
    public AddHack3Context()
    {
    }

    public AddHack3Context(DbContextOptions<AddHack3Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Driving> Drivings { get; set; }

    public virtual DbSet<DrivingStop> DrivingStops { get; set; }

    public virtual DbSet<Route> Routes { get; set; }

    public virtual DbSet<RouteStop> RouteStops { get; set; }

    public virtual DbSet<Stop> Stops { get; set; }

    public virtual DbSet<Vehicle> Vehicles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=add-hack.database.windows.net;Database=add-hack-3;User Id=addhack3;Password=Dontwastefood1!;", x => x.UseNetTopologySuite());

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Driving>(entity =>
        {
            entity.ToTable("Driving", "dbo");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Date).HasColumnType("date");

            entity.HasOne(d => d.Route).WithMany(p => p.Drivings)
                .HasForeignKey(d => d.RouteId)
                .HasConstraintName("FK_Driving_Route");

            entity.HasOne(d => d.Vehicle).WithMany(p => p.Drivings)
                .HasForeignKey(d => d.VehicleId)
                .HasConstraintName("FK_Driving_Vehicle");
        });

        modelBuilder.Entity<DrivingStop>(entity =>
        {
            entity.HasKey(e => new { e.DrivingId, e.StopId, e.Ordinal });

            entity.ToTable("DrivingStop", "dbo");

            entity.Property(e => e.Eta).HasColumnType("datetime");

            entity.HasOne(d => d.Driving).WithMany(p => p.DrivingStops)
                .HasForeignKey(d => d.DrivingId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DrivingStop_Driving");

            entity.HasOne(d => d.Stop).WithMany(p => p.DrivingStops)
                .HasForeignKey(d => d.StopId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DrivingStop_Stop");
        });

        modelBuilder.Entity<Route>(entity =>
        {
            entity.ToTable("Route", "dbo");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Name).HasMaxLength(256);

            entity.HasOne(d => d.Vehicle).WithMany(p => p.Routes)
                .HasForeignKey(d => d.VehicleId)
                .HasConstraintName("FK_Route_Vehicle");
        });

        modelBuilder.Entity<RouteStop>(entity =>
        {
            entity.HasKey(e => new { e.RouteId, e.StopId, e.Ordinal });

            entity.ToTable("RouteStop", "dbo");

            entity.HasOne(d => d.Route).WithMany(p => p.RouteStops)
                .HasForeignKey(d => d.RouteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RouteStop_Route");

            entity.HasOne(d => d.Stop).WithMany(p => p.RouteStops)
                .HasForeignKey(d => d.StopId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RouteStop_Stop");
        });

        modelBuilder.Entity<Stop>(entity =>
        {
            entity.ToTable("Stop", "dbo");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Address).HasMaxLength(256);
            entity.Property(e => e.Contact).HasMaxLength(256);
            entity.Property(e => e.Image).HasColumnType("image");
            entity.Property(e => e.MovieUrl).HasMaxLength(256);
            entity.Property(e => e.Name).HasMaxLength(256);
        });

        modelBuilder.Entity<Vehicle>(entity =>
        {
            entity.ToTable("Vehicle", "dbo");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Name).HasMaxLength(256);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
